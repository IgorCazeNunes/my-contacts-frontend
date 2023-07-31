import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function EditContact() {
  const { id } = useParams();

  return (
    <>
      <PageHeader title={`Editar Contato ${id}`} />

      <ContactForm buttonLabel="Salvar Alterações" />
    </>
  );
}
