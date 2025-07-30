import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProcessById } from '../../api/processApi';

export default function ProcesoResumen() {
  const { processId } = useParams();
  const navigate = useNavigate();
  const [process, setProcess] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProcessById(processId)
      .then((data) => {
        setProcess(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [processId]);

  const formatDate = (dateStr) =>
    dateStr ? new Date(dateStr).toLocaleDateString('es-EC') : 'No disponible';

  const goToObservaciones = () => {
    navigate(`/procesos/${processId}/observaciones`);
  };

  const goToEvidencias = () => {
    navigate(`/procesos/${processId}/evidencias`);
  };

  if (loading) return <div className="text-white">Cargando...</div>;
  if (!process)
    return <div className="text-red-500">Proceso no encontrado.</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{process.title}</h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-3xl mx-auto">
        <p className="mb-3 text-gray-300">{process.processDescription}</p>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Número de Proceso:</strong> {process.processNumber}
          </p>
          <p>
            <strong>Tipo de Proceso:</strong> {process.processType}
          </p>
          <p>
            <strong>Delito:</strong> {process.offense}
          </p>
          <p>
            <strong>Provincia:</strong> {process.province}
          </p>
          <p>
            <strong>Cantón:</strong> {process.canton}
          </p>
          <p>
            <strong>Estado:</strong>{' '}
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                process.processStatus === 'no iniciado'
                  ? 'bg-blue-500 text-white'
                  : process.processStatus === 'in progress'
                  ? 'bg-yellow-500 text-black'
                  : process.processStatus === 'completed'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-500'
              }`}
            >
              {process.processStatus === 'no iniciado'
                ? 'No iniciado'
                : process.processStatus === 'in progress'
                ? 'En proceso'
                : process.processStatus === 'completed'
                ? 'Cerrado'
                : process.processStatus}
            </span>
          </p>
          <p>
            <strong>Fecha de Inicio:</strong> {formatDate(process.startDate)}
          </p>
          <p>
            <strong>Fecha de Finalización:</strong>{' '}
            {formatDate(process.endDate)}
          </p>
          <p>
            <strong>Edad del Cliente:</strong> {process.clientAge} años
          </p>
          <p>
            <strong>Género del Cliente:</strong> {process.clientGender}
          </p>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={goToObservaciones}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
          >
            Ver Observaciones
          </button>
          <button
            onClick={goToEvidencias}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full"
          >
            Ver Evidencias
          </button>
        </div>
      </div>
    </div>
  );
}
