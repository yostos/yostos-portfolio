import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextRequest, NextResponse } from "next/server";
import { SendEmailCommandInput } from "@aws-sdk/client-ses";
import { STSClient, GetCallerIdentityCommand } from "@aws-sdk/client-sts";

// デバッグ情報を出力
console.log("環境変数:", {
  SES_REGION: process.env.SES_REGION,
  SES_FROM_EMAIL: process.env.SES_FROM_EMAIL,
  SES_TO_EMAIL: process.env.SES_TO_EMAIL,
  NODE_ENV: process.env.NODE_ENV,
  // 認証関連の変数が存在するかどうかを確認（値は出力しない）
  HAS_AWS_ACCESS_KEY: !!process.env.AWS_ACCESS_KEY_ID,
  HAS_AWS_SECRET_KEY: !!process.env.AWS_SECRET_ACCESS_KEY,
});

// AWS SES設定 - 認証情報を指定せずデフォルトチェーンに依存
const sesClient = new SESClient({
  region: process.env.SES_REGION || "ap-northeast-1",
  // credentials を指定しない
});

const checkIamRole = async () => {
  try {
    const stsClient = new STSClient({
      region: process.env.SES_REGION || "ap-northeast-1",
      // こちらも credentials を指定しない
    });
    const command = new GetCallerIdentityCommand({});
    const data = await stsClient.send(command);
    console.log("✅ IAM Role ARN:", data.Arn);
    return true;
  } catch (error) {
    console.error("❌ STS Error: IAM ロールの認証情報が取得できません", error);
    return false;
  }
};

// IAM ロールの認証チェック（テスト用）
// checkIamRole();

export async function POST(request: NextRequest) {
  // 認証チェックを実行
  const isAuthenticated = await checkIamRole();
  if (!isAuthenticated) {
    console.warn("⚠️ IAM認証に失敗しましたが、メール送信を試みます");
  }

  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // 入力検証
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "すべての項目を入力してください" },
        { status: 400 },
      );
    }

    // メール送信パラメータ
    const params: SendEmailCommandInput = {
      Source: process.env.SES_FROM_EMAIL ?? "", //空文字をデフォルトに
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL ?? ""],
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: `[お問い合わせ] ${subject}`,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: `名前: ${name}\nメールアドレス: ${email}\n件名: ${subject}\n\nメッセージ:\n${message}`,
            Charset: "UTF-8",
          },
          Html: {
            Data: `<h2>お問い合わせ内容</h2><p><strong>名前:</strong> ${name}</p><p><strong>メールアドレス:</strong> ${email}</p><p><strong>件名:</strong> ${subject}</p><h3>メッセージ:</h3><p>${message.replace(/\n/g, "<br>")}</p>`,
            Charset: "UTF-8",
          },
        },
      },
    };

    try {
      const command = new SendEmailCommand(params);
      await sesClient.send(command);
      console.log("✅ メール送信成功");
      return NextResponse.json({ success: true });
    } catch (sendError) {
      console.error("❌ メール送信エラー:", sendError);
      return NextResponse.json(
        { error: "メールの送信中にエラーが発生しました" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("リクエスト処理エラー:", error);
    return NextResponse.json(
      { error: "リクエストの処理中にエラーが発生しました" },
      { status: 500 },
    );
  }
}
