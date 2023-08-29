interface ProfileProps {
  name: string;
  title: string;
  imageUrl: string;
}

const ProfileImage: React.FC<ProfileProps> = ({ name, title, imageUrl }) => {
  return (
    <div className="flex text-slate-400 items-center p-4 shadow rounded-lg flex-col text-center justify-center">
      <div className="">
        <img
          src={imageUrl}
          alt={`Profile of ${name}`}
          className="w-20 h-20 rounded-full mr-4 border-4 border-black"
        />
      </div>
      <div className="">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-base">{title}</p>
      </div>
    </div>
  );
};

export default ProfileImage;
