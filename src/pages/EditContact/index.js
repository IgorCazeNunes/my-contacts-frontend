import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PageHeader from '../../components/PageHeader';

export default function EditContact() {
  const { id } = useParams();

  return (
    <>
      <PageHeader title={`Editar Contato ${id}`} />

      <h1>EditContact</h1>
    </>
  );
}
