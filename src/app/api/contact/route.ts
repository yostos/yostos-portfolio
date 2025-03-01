import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextRequest, NextResponse } from "next/server";
import { SendEmailCommandInput } from "@aws-sdk/client-ses";

// AWS SES クライアントの非同期初期化関数
async function createSesClient() {
  return new SESClient({
    region: process.env.SES_REGION || "ap-northeast-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });
}

export async function POST(request: NextRequest) {
  let sesClient: SESClient;

  try {
    // SESクライアントを動的に作成
    sesClient = await createSesClient();
  } catch (clientError) {
    console.error("SESクライアント作成エラー:", clientError);
    return NextResponse.json(
      { error: "AWS認証情報の取得に失敗しました" },
      { status: 500 },
    );
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
