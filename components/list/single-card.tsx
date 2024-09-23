import { SingleCardProps } from "@/types/types";

const SingleCard = ({ post }: SingleCardProps) => {
  return (
    <div className="bg-white shadow-sm  rounded-[6px] p-4">
      <h3 className="text-base lg:text-lg leading-relaxed mb-2">
        {post.title}
      </h3>
      <p className="leading-relaxed text-sm lg:text-base text-gray-600">
        {post.body}
      </p>
    </div>
  );
};

export default SingleCard;
