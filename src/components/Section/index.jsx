import { Container, Content } from "./styles"

export function Section({ title, children, icon: Icon, ...rest }) {
  return (
    <Container {...rest} >
      {
        {title} ?

        <div className="section_title">
          <h2>
            {title}
          </h2>
        </div>
        
        :

        null
      }

      <Content>
        
        {
          Icon && 
          <div className="caret_left">
            <Icon size={40} />
          </div>
        }
        
        {children}
        
        {
          Icon && 
          <div className="caret_right">
            <Icon size={40} />
          </div>
        }
        
      </Content>
    </Container>
  )
}