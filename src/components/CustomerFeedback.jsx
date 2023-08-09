import "../scss/CustomerFeedback.scss";

const FeedbackReview = () => {
  const reviewData = [
    {
      imageSrc:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTy84smJuXKgRQYga2bYHTXcxpGZJ5OEWQEzBC5gYoz60cm6meW",
      text: "Ridoy Rock",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente beatae, quisquam ullam similique, perferendis, aperiam laborum impedit obcaecati dolorem doloribus odio quibusdam non rerum ratione, met, consectetur adipisicing elit.",
      place: "London, UK",
    },
    {
      imageSrc:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTy84smJuXKgRQYga2bYHTXcxpGZJ5OEWQEzBC5gYoz60cm6meW",
      text: "Ridoy Rock",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente beatae, quisquam ullam similique, perferendis, aperiam laborum impedit obcaecati dolorem doloribus odio quibusdam non rerum ratione. Ut temporibus illum accusamus?",
      place: "London, UK",
    },
    {
      imageSrc:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTy84smJuXKgRQYga2bYHTXcxpGZJ5OEWQEzBC5gYoz60cm6meW",
      text: "Ridoy Rock",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente beatae, quisquam ullam similique, perferendis, aperiam laborum impedit obcaecati dolorem doloribus odio quibusdam non rerum ratione. Ut temporibus illum accusamus?",
      place: "London, UK",
    },
  ];
  return (
    <div className="feedback">
      <h3>Customers Feedback</h3>
      <div className="reviewCard">
        <div className="reviewDetails">
          {reviewData.map((data, index) => (
            <div className="card" key={index}>
              <div className="review">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <span>(5.0)</span>
                </div>
                <p>{data.review}</p>
              </div>
              <div className="leftContent">
                <div className="imageContent">
                  <img src={data.imageSrc} alt="no image" />
                </div>
                <div className="info">
                  <span className="name">{data.text}</span>
                  <span className="place">{data.place}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
function CustomerFeedback() {
  return (
    <div>
      <FeedbackReview />
    </div>
  );
}

export default CustomerFeedback;
