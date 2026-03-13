import { useParams } from 'react-router';
import React, { useState } from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';

import * as home from './styled';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import database from '../../utils/database';

export default function Unicpage() {
  const { modulo, categoria, operacao, suboperacao } = useParams();
  const [lighboxOpen, setLightboxOpen] = useState(null);

  const module = database[modulo];
  const categorieAct = module?.categories?.find((cat) => cat.id === categoria);
  const operationsAct = categorieAct?.operations?.find(
    (op) => op.id === operacao,
  );
  const subOperationsAct = operationsAct?.suboperations?.find(
    (sub) => sub.id === suboperacao,
  );

  const stepGuide = subOperationsAct?.steps || operationsAct?.steps || [];

  return (
    <>
      <Navbar />
      <home.Layout>
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

          <home.MiniTitle>Orientações</home.MiniTitle>

          <home.WrapperContent>
            {stepGuide?.length > 0 ? (
              <home.StepList>
                {stepGuide.map((stp) => (
                  <home.StepItem key={stp.id}>
                    {stp.instruction}
                    {stp.image && (
                      <home.ImageContainer>
                        <home.WrapperImage
                          onClick={() => setLightboxOpen(stp.image)}
                        >
                          <home.DivImage
                            src={stp.image}
                            alt={`Ilustração do passo ${stp.id}`}
                            style={{ cursor: 'zoom-in' }}
                          />
                        </home.WrapperImage>
                      </home.ImageContainer>
                    )}
                  </home.StepItem>
                ))}
              </home.StepList>
            ) : (
              <p>Guia ainda em construção</p>
            )}
          </home.WrapperContent>
        </home.Container>

        {lighboxOpen && (
          <home.LightboxOverlay onClick={() => setLightboxOpen(null)}>
            <home.CloseButton onClick={() => setLightboxOpen(null)}>
              <IoCloseCircleSharp className="close" />
            </home.CloseButton>

            <home.LightboxImage
              src={lighboxOpen}
              alt="Imagem ampliada"
              onClick={(e) => e.stopPropagation()}
            />
          </home.LightboxOverlay>
        )}
      </home.Layout>
    </>
  );
}
