import { useParams } from 'react-router';

import * as home from './styled';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import database from '../../utils/database';

export default function Unicpage() {
  const { modulo, categoria, operacao, suboperacao } = useParams();

  const module = database[modulo];
  const categorieAct = module?.categories?.find((cat) => cat.id === categoria);
  const operationsAct = categorieAct?.operations?.find(
    (op) => op.id === operacao,
  );
  const subOperationsAct = operationsAct?.suboperations?.find(
    (sub) => sub.id === suboperacao,
  );

  const stepGuide = subOperationsAct?.steps || operationsAct.steps || [];
  console.log(stepGuide);

  return (
    <>
      <Navbar />
      <Sidebar />
      <home.Container>
        <home.WrapperTitle>
          <home.Title>
            {subOperationsAct
              ? `${operationsAct?.title} - ${subOperationsAct?.title}`
              : operationsAct?.title}
          </home.Title>

          <home.SubTitle>
            Abaixo, contém o passo a passo orientado de como emitir um{' '}
            <span>{operationsAct?.title}</span>, e no final, terá um vídeo do
            mesmo processo.{' '}
          </home.SubTitle>
        </home.WrapperTitle>

        <home.MiniTitle>Passo a Passo</home.MiniTitle>

        <home.WrapperContent>
          {stepGuide.length > 0 ? (
            <home.StepList>
              {stepGuide.map((stp) => (
                <home.StepItem key={stp.id}>{stp.instruction}</home.StepItem>
              ))}
            </home.StepList>
          ) : (
            <p>Guia ainda em construção</p>
          )}
        </home.WrapperContent>
      </home.Container>
    </>
  );
}
