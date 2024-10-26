"use server";
export type Rating = 1 | 2 | 3 | 4 | 5;
export interface Comment {
  name: string;
  feedback: string;
  email: string;
  rating?: Rating;
}

export const handleComment = async (_previousState: any, comment: FormData) => {
  try {
    // console.log("previous", previousState);
    const x = Object.fromEntries(comment);
    console.log("Zetu", x);
    return { msg: "success" };
  } catch (_err) {
    console.log(_err);
    return { msg: "failed" };
  }
};
