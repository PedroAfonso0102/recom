import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Simulação do processamento de e-mail por 1 segundo
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Integrar com serviço real (Resend, SendGrid, SMTP)
    console.log('Dados do formulário recebidos:', body);

    return NextResponse.json(
      { message: 'Solicitação de cotação enviada com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro na rota de contato:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a solicitação de contato.' },
      { status: 500 }
    );
  }
}
