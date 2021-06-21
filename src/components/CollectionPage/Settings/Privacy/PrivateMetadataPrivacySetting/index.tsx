import { FC, memo, useState } from 'react'
import { useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

import {
  HandleSetGlobalApproval,
  RInventoryApprovals,
  ResultInventoryApprovals,
} from '../../../../../../interface/nft'
import { UIExpiration } from '../../../../../../interface/nft-ui'
import { MAX_GAS } from '../../../../../../utils/constants'
import parseErrorMsg from '../../../../../../utils/parseErrorMsg'
import useMutationExeContract from '../../../../../hooks/useMutationExeContract'
import ApprovalSetting from '../../../../Cards/ApprovalSetting'
import { ValidationError, format, validate } from '../lib'

type Props = {
  isPrivate: boolean
  expiration: UIExpiration
  contractAddress: string
  walletAddress: string
  viewingKey: string
}

const PrivateMetadataPrivacySetting: FC<Props> = ({
  isPrivate,
  expiration,
  contractAddress,
  walletAddress,
  viewingKey,
}) => {
  const queryClient = useQueryClient()

  // custom hooks
  const { mutate, isLoading } =
    useMutationExeContract<HandleSetGlobalApproval>()

  // component state
  const [errors, setErrors] = useState<ValidationError | undefined>()

  const onSave = (isPrivate: boolean, expSettings: UIExpiration) => {
    const validation = validate(isPrivate, expSettings)

    setErrors(validation.errors)

    if (validation.hasError) {
      return
    }

    const handleMsg = format(isPrivate, expSettings)

    mutate(
      {
        contractAddress,
        handleMsg,
        maxGas: MAX_GAS.NFT.SET_GLOBAL_APPROVAL,
      },
      {
        onSuccess: (_, { handleMsg: { set_global_approval } }) => {
          queryClient.setQueryData<ResultInventoryApprovals | undefined>(
            ['inventoryApprovals', walletAddress, viewingKey, contractAddress],
            (original) => {
              if (original) {
                const { view_private_metadata, expires } = set_global_approval
                const isPublic = view_private_metadata === 'all'
                const update: Partial<RInventoryApprovals> = {
                  private_metadata_is_public: isPublic ? true : false,
                  private_metadata_is_public_expiration: isPublic
                    ? expires
                    : null,
                }
                return {
                  inventory_approvals: {
                    ...original.inventory_approvals,
                    ...update,
                  },
                }
              }
            }
          )

          toast.success('Updated private metadata privacy setting.')
        },
        onError: (error) => {
          toast.error(parseErrorMsg(error))
        },
      }
    )
  }

  return (
    <ApprovalSetting
      title="Private Metadata Privacy Settings"
      description="Turning this off will allow anyone see the private metadata of all your owned assets."
      isPrivate={isPrivate}
      expiration={expiration}
      toggleId="privateMetadata"
      toggleLabel="Hide private metadata"
      onSubmit={onSave}
      errors={errors}
      loading={isLoading}
    />
  )
}

export default memo(PrivateMetadataPrivacySetting)
