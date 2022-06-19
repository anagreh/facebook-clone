export async function fetchComments(post: Post) {
  const requestInit: RequestInit = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwtToken"),
    },
  };

  const commentsResp = await fetch(
    process.env.REACT_APP_SERVER + `/post_comments?postId=${post._id}`,
    requestInit,
  );

  if (commentsResp.ok === false) throw commentsResp.statusText;

  return commentsResp.json();
}

export async function fetchLikes(post: Post) {
  const requestInit: RequestInit = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwtToken"),
    },
  };
  const likesResp = await fetch(
    process.env.REACT_APP_SERVER + `/post_likes/?postId=${post._id}`,
    requestInit,
  );

  if (likesResp.ok === false) throw likesResp.statusText;
  return likesResp.json();
}
