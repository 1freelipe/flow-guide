import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';

import * as home from './styled';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import database from '../../utils/database';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

export default function Unicpage() {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const { modulo, categoria, operacao, suboperacao } = useParams();
  const [lighboxOpen, setLightboxOpen] = useState(null);

  const stepsForPages = 8;
  const module = database[modulo];
  const categorieAct = module?.categories?.find((cat) => cat.id === categoria);
  const operationsAct = categorieAct?.operations?.find(
    (op) => op.id === operacao,
  );
  const subOperationsAct = operationsAct?.suboperations?.find(
    (sub) => sub.id === suboperacao,
  );

  const stepGuide = subOperationsAct?.steps || operationsAct?.steps || [];

  useEffect(() => {
    // eslint-disable-next-line
    setPaginaAtual(1);
  }, [operacao, suboperacao]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [paginaAtual]);

  const indexLastStep = paginaAtual * stepsForPages;
  const indexFirstStep = indexLastStep - stepsForPages;

  const handleNextPage = (novaPagina) => {
    setPaginaAtual(novaPagina);
  };

  const handleLastPage = (novaPagina) => {
    setPaginaAtual(novaPagina);
  };

  const handleInitialPage = () => {
    setPaginaAtual(1);
  };

  const handleFinalPage = () => {
    setPaginaAtual(totalPages);
  };

  const stepAct = stepGuide.slice(indexFirstStep, indexLastStep);
  const totalPages = Math.ceil(stepGuide.length / stepsForPages);

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
                {stepAct.map((stp) => (
                  <home.StepItem key={stp.id}>
                    <span
                      dangerouslySetInnerHTML={{ __html: stp.instruction }}
                    />
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

          {totalPages > 1 && (
            <home.PaginationContainer>
              <home.PaginationButton
                onClick={handleInitialPage}
                disabled={paginaAtual === 1}
              >
                <MdKeyboardDoubleArrowLeft className="arrow" />
              </home.PaginationButton>
              <home.PaginationButton
                onClick={() => handleLastPage(paginaAtual - 1)}
                disabled={paginaAtual === 1}
              >
                Anterior
              </home.PaginationButton>

              <home.PaginationInfo>
                Página {paginaAtual} de {totalPages}
              </home.PaginationInfo>

              <home.PaginationButton
                onClick={() => handleNextPage(paginaAtual + 1)}
                disabled={paginaAtual === totalPages}
              >
                Próximo
              </home.PaginationButton>
              <home.PaginationButton onClick={handleFinalPage}>
                <MdKeyboardDoubleArrowRight
                  className="arrow"
                  disabled={paginaAtual === totalPages}
                />
              </home.PaginationButton>
            </home.PaginationContainer>
          )}
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
