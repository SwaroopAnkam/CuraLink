import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function ReviewCard({ data }) {
  // Render five stars based on the rating value.
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<StarIcon key={i} className="w-5 h-5" />);
      } else if (rating >= i - 0.5) {
        stars.push(<StarHalfIcon key={i} className="w-5 h-5" />);
      } else {
        stars.push(<StarBorderIcon key={i} className="w-5 h-5" />);
      }
    }
    return stars;
  };

  return (
    <div className="outfit-400 p-4 shadow-md rounded-lg border-2 border-dash border-blue-400 bg-blue-100">
      <div className="photo mb-2">
        <img
          src={data.img}
          alt="profile photo"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div className="name font-serif font-bold text-2xl tracking-wide mb-1">
        {data.name}
      </div>
      <div className="comment text-base font-light italic text-gray-700 mb-2">
        {data.comment}
      </div>
      <div className="rating flex items-center">
        <div className="stars flex text-yellow-500">
          {renderStars(data.rating)}
        </div>
        <p className="ml-2 text-base">{data.rating}</p>
      </div>
    </div>
  );
}
