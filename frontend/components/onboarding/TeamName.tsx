import { MAX_INPUT_STRING_LENGTH } from '@/constants'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FaCheck, FaLock } from 'react-icons/fa6'
import { MdVerified } from 'react-icons/md'

const DOMAIN_BANLIST = [
  'gmail.com',
  'noreply.github.com',
  'gmail.com.com',
  'gmail.commit',
  '126.com',
  'qq.com',
  'liferay.com',
  '163.com',
  'apache.org',
  'me.com',
  'icloud.com',
  'mac.com',
  'mail.ru',
  'freebsd.org',
  'gentoo.org',
  'live.com',
  'mozilla.com',
  'naver.com',
  'hotmail.com',
  'yahoo.com',
  'yandex.ru',
  'trashmail.com',
  'mailinator.com',
  'kamismail.com',
  'outlook.com',
  'protonmail.com',
  'users.noreply.github.com',
  'tutanota.com',
  'icloud.com',
  'aol.com',
  'zoho.com',
  'mail.com',
  'yandex.com',
  'googlegroups.com',
]

interface TeamNameProps {
  name: string
  setName: Function
  isLocked?: boolean
}

export const TeamName = (props: TeamNameProps) => {
  const session = useSession()

  useEffect(() => {
    const emailDomain = session.data?.user?.email?.split('@')[1]
    if (emailDomain && !DOMAIN_BANLIST.includes(emailDomain)) {
      const orgName = emailDomain?.split('.')[0]
      if (orgName && !props.name) props.setName(orgName)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.data?.user?.email])

  return (
    <div className="flex flex-col justify-center max-w-md mx-auto">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orgname">
        Organisation name
      </label>
      <div className="relative">
        <input
          id="orgname"
          className={clsx('text-lg w-full', props.isLocked && 'opacity-70')}
          required
          disabled={props.isLocked}
          maxLength={MAX_INPUT_STRING_LENGTH}
          value={props.name}
          onChange={(e) => props.setName(e.target.value.replace(/[^a-z0-9]/gi, ''))}
        />
        {props.isLocked && (
          <MdVerified className="absolute right-4 top-3 text-emerald-400 shrink-0" />
        )}
      </div>
    </div>
  )
}
