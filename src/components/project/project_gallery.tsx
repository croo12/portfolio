import { ProjectProps } from '@/utils/props';
import React from 'react';
import ProjectCard from './project_card';

const ProjectGallery : React.FC<ProjectProps> = ({image = undefined, content, title, job, feeling}) => {
  image = image ? image : '/navy_back.png';
  
  // const data = await getData();

  return (
    <div className='w-full p-4' style={{ display: 'flex' }}>
      <div className='pt-8' style={{ flex: 1 }}>
        <img className='block m-auto' src={image} alt="Gallery" style={{ width: '100%', height: 'auto' }} />
        <button className='rounded-xl font-bold bg-gray-100 p-2 m-4 mx-auto text-center'>GO README</button>
      </div>
      <ProjectCard 
        title={title}
        content={content}
        feeling={feeling}
        job={job}
      />
    </div>
  );
};

// const getData = async () => {
//   const TOKEN = `token ${process.env.NEXT_PUBLIC_API_KEY}`;

  // console.log(process.env.NEXT_PUBLIC_API_KEY);
  // console.log(`Token : `, TOKEN);

  // const response = await fetch('https://api.github.com/repos/croo12/ssafy1/readme',
  //   {
  //     headers : {
  //       Authorization : TOKEN
  //     },
  //     method : "GET",
  //   });
  // const jsonData = await response.json();

  // const jsonData = DUMMY_README;

  // const data = Buffer.from(jsonData.content, `base64`).toString('utf-8');

  // console.log(data);

  // const body = JSON.stringify({
  //   text : data
  // })

  // const res = await fetch('https://api.github.com/markdown',
  //   {
  //     headers : {
  //       Authorization : TOKEN,
  //       'Content-Type': 'application/json',
  //     },
  //     method : "POST",
  //     body,
  //   });

  // const markdown = await res.text();

  // console.log(`markdown html : `, markdown);
    
  // return markdown;
// }

export default ProjectGallery;
