import { Plus, X } from "@phosphor-icons/react";

import { Container } from "./styles";

export function ListItem({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest} 
      />

      <button
        type="button" 
        onClick={onClick}
      >
        { isNew ? <Plus size={22}/> : <X size={22}/> }
      </button>
    </Container>
  )
}