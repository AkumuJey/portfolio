"use server";
export type Rating = 1 | 2 | 3 | 4 | 5;
export interface Comment {
  name: string;
  feedback: string;
  email: string;
  rating?: Rating;
}

export const handleComment = async (
  _previousState: unknown,
  formData: FormData
) => {
  try {
    // console.log("previous", previousState);
    const comment: Comment = {
      name: formData.get("name") as string,
      feedback: formData.get("feedback") as string,
      email: formData.get("email") as string,
      rating: formData.has("rating")
        ? (Number(formData.get("rating")) as Rating)
        : undefined,
    };

    return { msg: comment.name, open: true };
  } catch {
    return { msg: "failed", open: false };
  }
};
