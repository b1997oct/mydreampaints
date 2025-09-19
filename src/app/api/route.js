import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    formData.append("access_key", process.env.WEB3FORMS_KEY);
    formData.append("site", "mydreampaints.com");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
