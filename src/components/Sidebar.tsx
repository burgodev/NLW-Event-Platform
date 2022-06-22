import { gql, useQuery } from '@apollo/client';
import Lesson from './Lesson';

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      availableAt
      lessonType
      title
      slug
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class';
  }[];
}

const Sidebar = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(
    GET_LESSONS_QUERY
  );

  console.log('aa', data);
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="block pb-6 mb-6 text-2xl font-bold border-b border-gray-500">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(
          ({
            id,
            title,
            slug,
            availableAt,
            lessonType,
          }) => (
            <Lesson
              key={id}
              title={title}
              slug={slug}
              availableAt={new Date(availableAt)}
              type={lessonType}
            />
          )
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
