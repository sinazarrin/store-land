import { useState } from 'react'
import * as Styled from './styled'
import Button from '../../../../Components/MaterialComponents/Button'

const ButtonsFilter = () => {
    const [first] = useState(["هودی", "کلاه", "شلوار", "تیشرت", "کفش", "بوت"])

    return (
        <Styled.ButtonsFilter>
            {first.map((item: string) => {
                return <Button>{item}</Button>
            })}
        </Styled.ButtonsFilter>
    )
}

export default ButtonsFilter