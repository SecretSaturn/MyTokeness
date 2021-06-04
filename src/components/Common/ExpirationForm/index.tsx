import { FC, FormEvent, memo } from 'react'
import DatePicker from 'react-datepicker'

import { blockheightPattern } from '../../../../utils/regexPatterns'
import { FormatExpiration } from '../../Cards/ApprovalSetting/lib'
import { DatePickerWrapper } from '../../UI/DatePicker'
import { Label } from '../../UI/Forms'
import { Radio } from '../../UI/Forms/Radio'
import MessageWithIcon from '../MessageWithIcon'
import { Field, InputWrapper, StyledInput, StyledRadioGroup } from './styles'

type Props = {
  settings: FormatExpiration
  onChange: (data: Partial<FormatExpiration>) => void
  error?: string
}

const ExpirationForm: FC<Props> = ({ settings, onChange, error }) => {
  const onChangeBlockheight = (e: FormEvent<HTMLInputElement>) => {
    const blockheight = e.currentTarget.value
    if (!blockheight || blockheight.match(blockheightPattern)) {
      onChange({ blockheight })
    }
  }

  return (
    <Field>
      <Label>Expiration</Label>
      <StyledRadioGroup
        selectedValue={settings.type}
        onClick={(value) =>
          onChange({ type: value as FormatExpiration['type'] })
        }
      >
        <Radio value="never" labelText="Never" isRegular />
        <Radio value="date" labelText="Date" isRegular />
        <Radio value="blockheight" labelText="Blockheight" isRegular />
      </StyledRadioGroup>
      {settings.type === 'blockheight' && (
        <InputWrapper>
          <StyledInput
            placeholder="3000000"
            value={settings.blockheight}
            onChange={onChangeBlockheight}
          />
          {error && <MessageWithIcon validation="error" message={error} />}
        </InputWrapper>
      )}
      {settings.type === 'date' && (
        <DatePickerWrapper>
          <DatePicker
            selected={settings.date}
            onChange={(date: Date) => onChange({ date })}
            customInput={<StyledInput />}
            dateFormat="MMMM d, yyyy h:mm aa"
            showTimeInput
            minDate={new Date()}
          />
          {error && <MessageWithIcon validation="error" message={error} />}
        </DatePickerWrapper>
      )}
    </Field>
  )
}

export default memo(ExpirationForm)