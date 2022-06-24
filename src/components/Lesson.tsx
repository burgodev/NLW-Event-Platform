import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';

interface Props {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

const Lesson = ({
  title,
  slug,
  availableAt,
  type,
}: Props) => {
  const { slug: urlSlug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const isActiveLesson = slug === urlSlug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted.toString()}
      </span>

      <div
        className={`p-4 mt-2 border border-gray-500 rounded group-hover:border-green-500 ${
          isActiveLesson && 'bg-green-500'
        }`}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`flex items-center gap-2 text-sm font-medium ${
                isActiveLesson
                  ? 'text-white'
                  : 'text-blue-500'
              }`}>
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={`px-2 py-[0.125rem] text-xs rounded text-white border font-bold ${
              isActiveLesson
                ? 'border-white'
                : 'border-green-300 '
            }`}>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={`block mt-5 ${
            isActiveLesson ? 'text-white' : 'text-gray-200'
          }`}>
          {title}
        </strong>
      </div>
    </Link>
  );
};

export default Lesson;
