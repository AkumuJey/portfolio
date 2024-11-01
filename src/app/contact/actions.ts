"use server";
export type Rating = 1 | 2 | 3 | 4 | 5;
export interface Comment {
  name: string;
  feedback: string;
  email: string;
  rating?: Rating;
}

export const handleComment = async (
  _previousState: any,
  formData: FormData
) => {
  try {
    // console.log("previous", previousState);
    const comment: Comment = Object.fromEntries(formData);
    return { msg: comment.name, open: true };
  } catch (_err) {
    console.log(_err);
    return { msg: "failed", open: false };
  }
};
