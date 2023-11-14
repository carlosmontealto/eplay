import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  position: relative;
  > img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    border: 2px solid ${cores.branco};
    object-fit: cover;
  }
  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
      cursor: pointer;
    }
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }

  &.visible {
    display: flex;
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  header {
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
    cursor: pointer;
  }

  > img {
    width: 100%;
    cursor: default;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`
