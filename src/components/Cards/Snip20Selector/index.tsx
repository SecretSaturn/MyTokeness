import { FC, memo, useMemo } from "react";

import { useStoreState } from "../../../hooks/storeHooks";
import useQueryUserSnip20s from "../../../hooks/useQueryUserSnip20s";
import useToggle from "../../../hooks/useToggle";
import InputWithLoading from "../../Common/InputWithLoading";
import MessageWithIcon from "../../Common/MessageWithIcon";
import { Card, Header, Wrapper } from "../../UI/Card";
import { Field, Label, StyledSelect } from "../../UI/Forms";
import { StyledHint } from "./styles";

type Props = {
  value: string;
  debouncedValue: string;
  onChange?: (value: string) => void;
  loading?: boolean;
  error?: string;
  extraOptions?: { value: string; label: string }[];
  label?: string;
  switchText?: string;
};

const Snip20Selector: FC<Props> = ({
  value,
  onChange = () => null,
  loading,
  error,
  extraOptions = [],
  label = "Your created tokens",
  switchText = "or select your created tokens",
}) => {
  // store state
  const walletAddress = useStoreState((state) => state.auth.connectedAddress);

  // custom hooks
  const { data, isLoading } = useQueryUserSnip20s(walletAddress);

  // component state
  const [showCustom, toggleCustom] = useToggle();
  const options = useMemo(
    () =>
      data
        ? data
            .map((item) => ({
              value: item.address,
              label: `${item.symbol} - ${item.name} - ${item.address}`,
            }))
            .concat(extraOptions)
        : [],
    [data, extraOptions],
  );

  const onSwitchaRoo = () => {
    toggleCustom();
    onChange("");
  };

  return (
    <Card>
      <Header>Token</Header>
      <Wrapper>
        <Field>
          <Label>{showCustom ? "Contract address" : label}</Label>
          {showCustom ? (
            <InputWithLoading
              placeholder="secret1gz5awqg4tdl93nqqyjw62ngxmwjns26c3urf46"
              value={value}
              onChange={(e) => onChange(e.currentTarget.value)}
              loading={loading}
            />
          ) : (
            <StyledSelect
              classNamePrefix="select"
              options={options}
              value={options.filter((item) => item.value === value)}
              //@ts-ignore
              onChange={(option: { value: string; label: string }) =>
                onChange(option.value)
              }
              isLoading={isLoading}
            />
          )}
          <StyledHint onClick={onSwitchaRoo}>
            {showCustom ? switchText : "or add custom contract address"}
          </StyledHint>
          {error && <MessageWithIcon validation="error" message={error} />}
          {value && !showCustom && (
            <MessageWithIcon
              validation="success"
              message={`Contract Address: ${value}`}
            />
          )}
        </Field>
      </Wrapper>
    </Card>
  );
};

export default memo(Snip20Selector);
