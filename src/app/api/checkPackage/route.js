import { NextResponse } from "next/server";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";
import { checkPackage } from "./../../../lib/api";
import { xml2json } from "./../../../until/helper";

export async function GET(req, context) {
  try {
    const isdn = getQSParamFromURL("isdn", req.url);

    const res = await checkPackage(isdn);
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while get code.", error },
      { status: 500 }
    );
  }
}
export function getQSParamFromURL(key, url) {
  if (!url) return "";
  const search = new URL(url).search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get(key);
}
