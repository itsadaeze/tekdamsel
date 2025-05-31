type Props = {
  title: string;
  description: string;
};

const ProjectCard = ({ title, description }: Props) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow hover:scale-[1.02] transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default ProjectCard;
