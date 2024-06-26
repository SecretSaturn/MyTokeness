import { FC, forwardRef } from "react";

import AnalyticsDuo from "./AnalyticsDuo";
import ArrowLeft from "./ArrowLeft";
import BoxDuo from "./BoxDuo";
import BoxOpenDuo from "./BoxOpenDuo";
import BrowserDuo from "./BrowserDuo";
import CaretDown from "./CaretDown";
import CaretUp from "./CaretUp";
import ChevronDown from "./ChevronDown";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import ChevronUp from "./ChevronUp";
import CirclePlayDuo from "./CirclePlayDuo";
import CoinDuo from "./CoinDuo";
import CopyDuo from "./CopyDuo";
import CrownLogo from "./CrownLogo";
import Dizzy from "./Dizzy";
import DraftingCompassDuo from "./DraftingCompassDuo";
import EllipsisH from "./EllipsisH";
import EllipsisV from "./EllipsisV";
import ExchangeDuo from "./ExchangeDuo";
import ExclamationCircle from "./ExclamationCircle";
import ExclamationCircleDuo from "./ExclamationCircleDuo";
import ExternalLinkDuo from "./ExternalLinkDuo";
import FireDuo from "./FireDuo";
import Flower from "./Flower";
import FutbolBallDuo from "./FutbolBallDuo";
import GavelDuo from "./GavelDuo";
import GiftCardDuo from "./GiftCardDuo";
import GitHub from "./GitHub";
import HandHoldingUSD from "./HandHoldingUSD";
import HomeDuo from "./HomeDuo";
import HorizontalRule from "./HorizontalRule";
import IndustryDuo from "./IndustryDuo";
import Keplr from "./Kelpr";
import KeySkeleton from "./KeySkeleton";
import ListUlDuo from "./ListUlDuo";
import LockKeyholeDuo from "./LockKeyholeDuo";
import LockKeyholeOpenDuo from "./LockKeyholeOpenDuo";
import Minus from "./Minus";
import NarwhalDuo from "./NarwhalDuo";
import Palette from "./Palette";
import PencilPaintbrushDuo from "./PencilPaintbrushDuo";
import PiggyBankDuo from "./PiggyBankDuo";
import Plus from "./Plus";
import PuzzlePiece from "./PuzzlePiece";
import ReceiptDuo from "./ReceiptDuo";
import SadTearDuo from "./SadTearDuo";
import SecretNetworkLogo from "./SecretNetworkLogo";
import ShieldDuo from "./ShieldDuo";
import SignInDuo from "./SignInDuo";
import SignOutDuo from "./SignOutDuo";
import StampDuo from "./StampDuo";
import StoreDuo from "./StoreDuo";
import TasksAltDuo from "./TasksAltDuo";
import TicketDuo from "./TicketDuo";
import Times from "./Times";
import ToolboxDuo from "./ToolboxDuo";
import TrashDuo from "./TrashDuo";
import TreasureHunt from "./TreasureHunt";
import UserCircleDuo from "./UserCircleDuo";
import UserCrownDuo from "./UserCrownDuo";
import UserDuo from "./UserDuo";
import UsersDuo from "./UsersDuo";
import UserShieldDuo from "./UserShieldDuo";
import WalletDuo from "./WalletDuo";

export type IconName = keyof typeof ICON_MAP;

type Props = {
  name?: IconName;
  className?: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
};

const ICON_MAP = {
  "piggy-bank-duo": PiggyBankDuo,
  "ticket-duo": TicketDuo,
  "coin-duo": CoinDuo,
  "wallet-duo": WalletDuo,
  "sign-in-duo": SignInDuo,
  "sign-out-duo": SignOutDuo,
  "gavel-duo": GavelDuo,
  "treasure-hunt": TreasureHunt,
  "user-duo": UserDuo,
  "futbol-ball-duo": FutbolBallDuo,
  "browser-duo": BrowserDuo,
  "narwhal-duo": NarwhalDuo,
  "toolbox-duo": ToolboxDuo,
  "crown-logo": CrownLogo,
  "secret-network-logo": SecretNetworkLogo,
  "sad-tear-duo": SadTearDuo,
  "circle-play-duo": CirclePlayDuo,
  "lock-keyhole-open-duo": LockKeyholeOpenDuo,
  "lock-keyhole-duo": LockKeyholeDuo,
  "shield-duo": ShieldDuo,
  "user-shield-duo": UserShieldDuo,
  "ellipsis-v": EllipsisV,
  "external-link-duo": ExternalLinkDuo,
  "copy-duo": CopyDuo,
  "arrow-left": ArrowLeft,
  "drafting-compass-duo": DraftingCompassDuo,
  "trash-duo": TrashDuo,
  "store-duo": StoreDuo,
  "stamp-duo": StampDuo,
  "chevron-right": ChevronRight,
  "list-ul-duo": ListUlDuo,
  "analytics-duo": AnalyticsDuo,
  "exchange-duo": ExchangeDuo,
  plus: Plus,
  minus: Minus,
  "users-duo": UsersDuo,
  "hand-holding-usd": HandHoldingUSD,
  "tasks-alt-duo": TasksAltDuo,
  "user-crown-duo": UserCrownDuo,
  "industry-duo": IndustryDuo,
  "home-duo": HomeDuo,
  "receipt-duo": ReceiptDuo,
  "caret-down": CaretDown,
  "caret-up": CaretUp,
  "pencil-paintbrush-duo": PencilPaintbrushDuo,
  "exclamation-circle-duo": ExclamationCircleDuo,
  "horizontal-rule": HorizontalRule,
  "ellipsis-h": EllipsisH,
  "box-duo": BoxDuo,
  "box-open-duo": BoxOpenDuo,
  "key-skeleton": KeySkeleton,
  "user-circle-duo": UserCircleDuo,
  "chevron-up": ChevronUp,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  palette: Palette,
  "gift-card-duo": GiftCardDuo,
  "exclamation-circle": ExclamationCircle,
  times: Times,
  "fire-duo": FireDuo,
  flower: Flower,
  github: GitHub,
  "puzzle-piece": PuzzlePiece,
  keplr: Keplr,
  dizzy: Dizzy,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Icon: FC<Props> = forwardRef((props, _) => {
  const { name, className, ...rest } = props;
  const SelectedIcon = ICON_MAP[(name as IconName) || "dizzy"];

  return <SelectedIcon className={className} {...rest} />;
});

export default Icon;
