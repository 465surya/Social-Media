document.querySelectorAll(".post").forEach((post) => {
  const postId = post.dataset.postId;
  const ratings = post.querySelectorAll(".post-rating");
  const likeRating = ratings[0];

  ratings.forEach((rating) => {
    const button = rating.querySelector(".post-rating-button");
    const count = rating.querySelector(".post-rating-count");

    button.addEventListener("click", async () => {
      if (rating.classList.contains("post-rating-selected")) {
        return;
      }

      // Update the count for the clicked rating
      count.textContent = Number(count.textContent) + 1;

      // Update the count for the previously selected rating
      ratings.forEach((rating) => {
        if (rating.classList.contains("post-rating-selected")) {
          const count = rating.querySelector(".post-rating-count");
          count.textContent = Math.max(0, Number(count.textContent) - 1);
          rating.classList.remove("post-rating-selected");
        }
      });

      // Mark the clicked rating as selected
      rating.classList.add("post-rating-selected");

      // Determine like or dislike
      const likeOrDislike = likeRating === rating ? "like" : "dislike";

      // Provide UI feedback (e.g., disabling the button)
      button.disabled = true;

      try {
        const response = await fetch(`/posts/${postId}/${likeOrDislike}`);
        if (!response.ok) {
          throw new Error("Failed to update rating on server");
        }
        const body = await response.json();
        console.log("Server response:", body);
      } catch (error) {
        console.error("Error updating rating:", error);
        // Optionally, revert the UI changes if the server update fails
        count.textContent = Math.max(0, Number(count.textContent) - 1);
        rating.classList.remove("post-rating-selected");
      } finally {
        // Re-enable the button
        button.disabled = false;
      }
    });
  });
});
