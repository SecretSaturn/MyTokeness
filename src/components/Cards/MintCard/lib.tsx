import { validateAddress } from "secretjs";
import { HandleMsgMint } from "../../../../interface/snip20";
import addPadding from "../../../../utils/addPadding";
import toSmallestDenomination from "../../../../utils/toSmallestDenomination";

interface ValidateResult {
  hasErrors: boolean;
  recipient: string;
  amount: string;
}

const validate = (recipient: string, amount: string): ValidateResult => {
  const errors = {
    hasErrors: false,
    recipient: "",
    amount: "",
  };

  if (!recipient || !validateAddress(recipient)) {
    errors.hasErrors = true;
    errors.recipient = "Please enter a vaild address.";
  }

  if (!amount) {
    errors.hasErrors = true;
    errors.amount = "Please enter an amount greater than 0.";
  }

  return errors;
};

const format = (
  recipient: string,
  memo: string,
  amount: string,
  decimals = 0,
): HandleMsgMint => {
  const amountInSmallestDenom = toSmallestDenomination(amount, decimals);
  return {
    mint: {
      recipient,
      amount: amountInSmallestDenom,
      memo,
      padding: addPadding(amountInSmallestDenom),
    },
  };
};

export { validate, format };
