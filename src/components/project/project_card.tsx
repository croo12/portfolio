import { ProjectProps } from "@/utils/props";

const ProjectCard : React.FC<ProjectProps> = ({ title, content, job, feeling }) => {
    return (
        <div className="rounded-xl max-h-80 overflow-y-auto" style={{ flex: 1, width: '100%', background: 'white', padding: '20px', margin: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
            <h2 className="text-2xl font-bold mb-4" style={{ borderBottom: '2px solid black', paddingBottom: '10px' }}>
                {title}
            </h2>
            <h3 className="font-bold text-lg">Project Description</h3>
            <p style={{ whiteSpace: 'pre-line', marginBottom: '25px' }}>{content}</p>
            <h3 className="font-bold text-lg">My Role</h3>
            <p style={{ whiteSpace: 'pre-line', marginBottom: '25px' }}>{job}</p>
            <h3 className="font-bold text-lg">Reflections</h3>
            <p style={{ whiteSpace: 'pre-line', marginBottom: '25px' }}>{feeling}</p>
        </div>
    );
};

export default ProjectCard;