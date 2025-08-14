import { cn } from '../lib/utils'
import Image from 'next/image'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <Image
            src="/khatapg-logo.png"
            alt="Khatabook Payments"
            width={150}
            height={40}
            className={cn('h-8 w-auto', className)}
            priority
        />
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <Image
            src="/khatapg-logo.png"
            alt="Khatabook Payments"
            width={40}
            height={40}
            className={cn('h-8 w-8', className)}
            priority
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/khatapg-logo.png"
            alt="Khatabook Payments"
            width={120}
            height={32}
            className={cn('h-6 w-auto', className)}
            priority
        />
    )
}
