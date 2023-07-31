import propTypes from 'prop-types';

import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

import * as S from './styles';

function ContactForm({ buttonLabel }) {
  return (
    <S.Form>
      <S.InputContainer>
        <FormGroup>
          <Input placeholder="Nome" />
        </FormGroup>

        <FormGroup>
          <Input placeholder="E-mail" />
        </FormGroup>

        <FormGroup>
          <Input placeholder="telefone" />
        </FormGroup>

        <FormGroup>
          <Select>
            <option value="instagram">Instagram</option>
          </Select>
        </FormGroup>
      </S.InputContainer>

      <Button type="submit">{buttonLabel}</Button>
    </S.Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
};

export default ContactForm;
