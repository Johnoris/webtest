export const LOGO = () => {
    return(
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="84" height="84" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_3_52" transform="scale(0.0119048)"/>
            </pattern>
            <image id="image0_3_52" width="84" height="84" xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>
    )
}

export const MONITOR_EARNINGS = () => {
    return(
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_0_77)">
            <rect width="65" height="65" rx="14" fill="#FEF0F2"/>
            <g filter="url(#filter0_d_0_77)">
            <path d="M8 19C8 15.6863 10.6863 13 14 13H51C54.3137 13 57 15.6863 57 19V78H8V19Z" fill="white"/>
            <rect x="12" y="17" width="17" height="6" fill="#F5F5F5"/>
            <rect x="42" y="19" width="11" height="2" fill="#F5F5F5"/>
            <rect x="12" y="27" width="41" height="10" fill="#FEE7EA"/>
            <circle cx="18.5" cy="47" r="6" fill="#E60A2B"/>
            <circle cx="32.5" cy="47" r="6" fill="#E1F3FF"/>
            <circle cx="46.5" cy="47" r="6" fill="#FEF7E1"/>
            <path d="M18.1677 51.125V50.1625C17.7323 50.0861 17.3752 49.92 17.0964 49.6641C16.8176 49.4082 16.617 49.0854 16.4948 48.6958L17.1365 48.4323C17.2663 48.799 17.4535 49.072 17.6979 49.2516C17.9424 49.4311 18.2365 49.5208 18.5802 49.5208C18.9469 49.5208 19.2486 49.4292 19.4854 49.2458C19.7222 49.0625 19.8406 48.8104 19.8406 48.4896C19.8406 48.1535 19.7356 47.8938 19.5255 47.7104C19.3155 47.5271 18.9202 47.3399 18.3396 47.149C17.7896 46.9733 17.379 46.7403 17.1078 46.45C16.8367 46.1597 16.7011 45.7969 16.7011 45.3615C16.7011 44.9413 16.8367 44.5899 17.1078 44.3073C17.379 44.0247 17.7323 43.8642 18.1677 43.826V42.875H18.8552V43.826C19.199 43.8642 19.495 43.9769 19.7432 44.1641C19.9915 44.3512 20.1806 44.5899 20.3104 44.8802L19.6688 45.1552C19.5618 44.9108 19.4186 44.7332 19.2391 44.6224C19.0596 44.5116 18.8247 44.4562 18.5344 44.4562C18.183 44.4562 17.9042 44.5365 17.6979 44.6969C17.4917 44.8573 17.3886 45.075 17.3886 45.35C17.3886 45.6403 17.5031 45.8752 17.7323 46.0547C17.9615 46.2342 18.3854 46.4194 19.0042 46.6104C19.5236 46.7708 19.9075 47.0019 20.1557 47.3036C20.404 47.6054 20.5281 47.9854 20.5281 48.4437C20.5281 48.925 20.3868 49.3127 20.1042 49.6068C19.8215 49.9009 19.4052 50.0899 18.8552 50.174V51.125H18.1677Z" fill="white"/>
            <path d="M29.75 51.125V50.3917C29.9486 50.2694 30.1281 50.1339 30.2885 49.9849C30.449 49.8359 30.5865 49.6774 30.701 49.5094C30.8156 49.3413 30.9035 49.1618 30.9646 48.9708C31.0257 48.7799 31.0563 48.5813 31.0563 48.375C31.0563 48.2757 31.0505 48.1802 31.0391 48.0885C31.0276 47.9969 31.0104 47.9014 30.9875 47.8021H29.75V47.1146H30.6437C30.3458 46.7021 30.1415 46.3373 30.0307 46.0203C29.92 45.7033 29.8646 45.3806 29.8646 45.0521C29.8646 44.3799 30.0976 43.8108 30.5635 43.3448C31.0295 42.8788 31.5986 42.6458 32.2708 42.6458C32.7674 42.6458 33.2161 42.77 33.6172 43.0182C34.0182 43.2665 34.3142 43.6007 34.5052 44.0208L33.875 44.2844C33.7375 43.9941 33.5217 43.763 33.2276 43.5911C32.9335 43.4193 32.6146 43.3333 32.2708 43.3333C31.7972 43.3333 31.3924 43.4995 31.0563 43.8318C30.7201 44.1641 30.5521 44.5708 30.5521 45.0521C30.5521 45.35 30.6132 45.6422 30.7354 45.9286C30.8576 46.2151 31.1021 46.6104 31.4688 47.1146H33.4167V47.8021H31.6865C31.7094 47.9014 31.7247 48.0007 31.7323 48.1C31.7399 48.1993 31.7438 48.291 31.7438 48.375C31.7438 48.7799 31.6559 49.158 31.4802 49.5094C31.3045 49.8608 31.083 50.1701 30.8156 50.4375H33.4167C33.7069 50.4375 33.9628 50.3611 34.1844 50.2083C34.4059 50.0556 34.5663 49.8073 34.6656 49.4635L35.2615 49.7615C35.1622 50.2122 34.9311 50.5521 34.5682 50.7813C34.2054 51.0104 33.8215 51.125 33.4167 51.125H29.75Z" fill="#81CFFE"/>
            <path d="M46.1563 51.125V49.4062H43.75V48.7188H46.1563V47.5729H43.75V46.8854H45.824L43.2917 42.875H44.1052L46.5 46.6677L48.8948 42.875H49.7084L47.1761 46.8854H49.25V47.5729H46.8438V48.7188H49.25V49.4062H46.8438V51.125H46.1563Z" fill="#FCE08D"/>
            <rect x="12" y="56" width="26" height="10" fill="#F5F5F5"/>
            <path d="M51.3333 58.0833L47.0256 62.4583L45.2308 60.6354L42 63.9167" stroke="#A8E39C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M51.3334 61.5833V58.0833H47.8334" stroke="#A8E39C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            </g>
            <rect x="0.3" y="0.3" width="64.4" height="64.4" rx="13.7" stroke="#FCB6C0" strokeWidth="0.6"/>
            <defs>
            <filter id="filter0_d_0_77" x="-2" y="7" width="69" height="85" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_77"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_77" result="shape"/>
            </filter>
            <clipPath id="clip0_0_77">
            <rect width="65" height="65" rx="14" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export const MANAGE_BUSINESS = () => {
    return(
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_0_107)">
            <rect width="65" height="65" rx="14" fill="#E1F3FF"/>
            <g filter="url(#filter0_d_0_107)">
            <path d="M8 18C8 14.6863 10.6863 12 14 12H51C54.3137 12 57 14.6863 57 18V77H8V18Z" fill="white"/>
            <circle cx="15" cy="29" r="3" fill="#E60A2B"/>
            <rect x="20" y="26" width="20" height="6" fill="#FEE7EA"/>
            <rect x="42" y="26" width="11" height="6" fill="#FEF0F2"/>
            <circle cx="15" cy="39" r="3" fill="#0EA3FD"/>
            <rect x="20" y="36" width="20" height="6" fill="#E1F3FF"/>
            <rect x="42" y="36" width="11" height="6" fill="#F5F5F5"/>
            <circle cx="15" cy="49" r="3" fill="#F9C320"/>
            <rect x="20" y="46" width="20" height="6" fill="#FEF7E1"/>
            <rect x="42" y="46" width="11" height="6" fill="#F5F5F5"/>
            <circle cx="15" cy="59" r="3" fill="#F5F5F5"/>
            <rect x="20" y="56" width="20" height="6" fill="#F5F5F5"/>
            <rect x="42" y="56" width="11" height="6" fill="#F5F5F5"/>
            <rect x="12" y="16" width="17" height="6" fill="#F5F5F5"/>
            <rect x="42" y="18" width="11" height="2" fill="#F5F5F5"/>
            </g>
            </g>
            <rect x="0.3" y="0.3" width="64.4" height="64.4" rx="13.7" stroke="#B3E2FE" strokeWidth="0.6"/>
            <defs>
            <filter id="filter0_d_0_107" x="-2" y="6" width="69" height="85" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_107"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_107" result="shape"/>
            </filter>
            <clipPath id="clip0_0_107">
            <rect width="65" height="65" rx="14" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export const DELEGATE_STAFF = () => {
    return(
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_0_141)">
            <rect width="65" height="65" rx="14" fill="#FEF7E1"/>
            <g filter="url(#filter0_d_0_141)">
            <g clipPath="url(#clip1_0_141)">
            <path d="M8 18C8 14.6863 10.6863 12 14 12H51C54.3137 12 57 14.6863 57 18V77H8V18Z" fill="white"/>
            <rect x="12" y="16" width="17" height="6" fill="#F5F5F5"/>
            <rect x="42" y="18" width="11" height="2" fill="#F5F5F5"/>
            <rect x="12" y="45" width="41" height="7" fill="#F5F5F5"/>
            <rect x="12" y="54" width="41" height="25" fill="#F5F5F5"/>
            <rect x="12" y="26" width="12" height="15" rx="1" fill="#F5F5F5"/>
            <rect x="26" y="26" width="13" height="15" rx="1" fill="#FEEBEE"/>
            <rect x="41" y="26" width="12" height="15" rx="1" fill="#F5F5F5"/>
            <path d="M18 33C19.2656 33 20.2916 31.974 20.2916 30.7083C20.2916 29.4427 19.2656 28.4167 18 28.4167C16.7343 28.4167 15.7083 29.4427 15.7083 30.7083C15.7083 31.974 16.7343 33 18 33Z" fill="#DEDEDE"/>
            <path d="M18 34.1458C15.7037 34.1458 13.8337 35.6858 13.8337 37.5833C13.8337 37.7117 13.9346 37.8125 14.0629 37.8125H21.9371C22.0654 37.8125 22.1662 37.7117 22.1662 37.5833C22.1662 35.6858 20.2962 34.1458 18 34.1458Z" fill="#DEDEDE"/>
            <path d="M32.5 33.5C33.7656 33.5 34.7916 32.474 34.7916 31.2083C34.7916 29.9427 33.7656 28.9167 32.5 28.9167C31.2343 28.9167 30.2083 29.9427 30.2083 31.2083C30.2083 32.474 31.2343 33.5 32.5 33.5Z" fill="#E60A2B"/>
            <path d="M32.5 34.6458C30.2037 34.6458 28.3337 36.1858 28.3337 38.0833C28.3337 38.2117 28.4346 38.3125 28.5629 38.3125H36.4371C36.5654 38.3125 36.6662 38.2117 36.6662 38.0833C36.6662 36.1858 34.7962 34.6458 32.5 34.6458Z" fill="#E60A2B"/>
            <path d="M47 33.5C48.2656 33.5 49.2916 32.474 49.2916 31.2083C49.2916 29.9427 48.2656 28.9167 47 28.9167C45.7343 28.9167 44.7083 29.9427 44.7083 31.2083C44.7083 32.474 45.7343 33.5 47 33.5Z" fill="#DEDEDE"/>
            <path d="M47 34.6458C44.7037 34.6458 42.8337 36.1858 42.8337 38.0833C42.8337 38.2117 42.9346 38.3125 43.0629 38.3125H50.9371C51.0654 38.3125 51.1662 38.2117 51.1662 38.0833C51.1662 36.1858 49.2962 34.6458 47 34.6458Z" fill="#DEDEDE"/>
            </g>
            </g>
            </g>
            <rect x="0.3" y="0.3" width="64.4" height="64.4" rx="13.7" stroke="#FDEDBE" strokeWidth="0.6"/>
            <defs>
            <filter id="filter0_d_0_141" x="-2" y="6" width="69" height="85" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_141"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_141" result="shape"/>
            </filter>
            <clipPath id="clip0_0_141">
            <rect width="65" height="65" rx="14" fill="white"/>
            </clipPath>
            <clipPath id="clip1_0_141">
            <path d="M8 18C8 14.6863 10.6863 12 14 12H51C54.3137 12 57 14.6863 57 18V77H8V18Z" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export const PASSWORD_VISIBLE = () => {
    return(
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.83C9.60998 16.83 7.66998 14.89 7.66998 12.5C7.66998 10.11 9.60998 8.17 12 8.17C14.39 8.17 16.33 10.11 16.33 12.5C16.33 14.89 14.39 16.83 12 16.83ZM12 9.67C10.44 9.67 9.16998 10.94 9.16998 12.5C9.16998 14.06 10.44 15.33 12 15.33C13.56 15.33 14.83 14.06 14.83 12.5C14.83 10.94 13.56 9.67 12 9.67Z" fill="#A6A6A6"/>
            <path d="M12 21.52C8.24002 21.52 4.69002 19.32 2.25002 15.5C1.19002 13.85 1.19002 11.16 2.25002 9.5C4.70002 5.68 8.25002 3.48 12 3.48C15.75 3.48 19.3 5.68 21.74 9.5C22.8 11.15 22.8 13.84 21.74 15.5C19.3 19.32 15.75 21.52 12 21.52ZM12 4.98C8.77002 4.98 5.68002 6.92 3.52002 10.31C2.77002 11.48 2.77002 13.52 3.52002 14.69C5.68002 18.08 8.77002 20.02 12 20.02C15.23 20.02 18.32 18.08 20.48 14.69C21.23 13.52 21.23 11.48 20.48 10.31C18.32 6.92 15.23 4.98 12 4.98Z" fill="#A6A6A6"/>
        </svg>
    )
}

export const PASSWORD_BLUR = () => {
    return(
        <svg width="24" height="25" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666667 0.846667L1.52 0L12.6667 11.1467L11.82 12L9.76667 9.94667C9 10.2 8.18667 10.3333 7.33333 10.3333C4 10.3333 1.15333 8.26 0 5.33333C0.46 4.16 1.19333 3.12667 2.12667 2.30667L0.666667 0.846667ZM7.33333 3.33333C7.86377 3.33333 8.37247 3.54405 8.74755 3.91912C9.12262 4.29419 9.33333 4.8029 9.33333 5.33333C9.33367 5.56038 9.29535 5.78582 9.22 6L6.66667 3.44667C6.88085 3.37132 7.10629 3.333 7.33333 3.33333ZM7.33333 0.333333C10.6667 0.333333 13.5133 2.40667 14.6667 5.33333C14.1226 6.71547 13.198 7.91514 12 8.79333L11.0533 7.84C11.9753 7.20225 12.7188 6.33937 13.2133 5.33333C12.6744 4.23329 11.8376 3.30651 10.7982 2.65834C9.75874 2.01016 8.55831 1.66659 7.33333 1.66667C6.60667 1.66667 5.89333 1.78667 5.22667 2L4.2 0.98C5.16 0.566667 6.22 0.333333 7.33333 0.333333ZM1.45333 5.33333C1.99229 6.43337 2.82905 7.36015 3.86849 8.00833C4.90793 8.65651 6.10836 9.00008 7.33333 9C7.79333 9 8.24667 8.95333 8.66667 8.86L7.14667 7.33333C6.68278 7.28361 6.24988 7.07658 5.91998 6.74668C5.59008 6.41678 5.38306 5.98389 5.33333 5.52L3.06667 3.24667C2.40667 3.81333 1.85333 4.52 1.45333 5.33333Z" fill="#B5B5B5"/>
        </svg>
    )
}

export const FEATURE_SELECTED = () => {
    return(
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 21.3542C5.56416 21.3542 1.14583 16.9358 1.14583 11.5C1.14583 6.06417 5.56416 1.64584 11 1.64584C16.4358 1.64584 20.8542 6.06417 20.8542 11.5C20.8542 16.9358 16.4358 21.3542 11 21.3542ZM11 3.02084C6.325 3.02084 2.52083 6.825 2.52083 11.5C2.52083 16.175 6.325 19.9792 11 19.9792C15.675 19.9792 19.4792 16.175 19.4792 11.5C19.4792 6.825 15.675 3.02084 11 3.02084Z" fill="#F9C320"/>
            <path d="M9.69834 14.7817C9.515 14.7817 9.34084 14.7083 9.2125 14.58L6.61834 11.9858C6.3525 11.72 6.3525 11.28 6.61834 11.0142C6.88417 10.7483 7.32417 10.7483 7.59 11.0142L9.69834 13.1225L14.41 8.41083C14.6758 8.145 15.1158 8.145 15.3817 8.41083C15.6475 8.67666 15.6475 9.11666 15.3817 9.3825L10.1842 14.58C10.0558 14.7083 9.88167 14.7817 9.69834 14.7817Z" fill="#F9C320"/>
        </svg>
    )
}

export const TIMER_ICON = () => {
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18.9583C5.63334 18.9583 2.08334 15.4083 2.08334 11.0417C2.08334 6.675 5.63334 3.125 10 3.125C14.3667 3.125 17.9167 6.675 17.9167 11.0417C17.9167 15.4083 14.3667 18.9583 10 18.9583ZM10 4.375C6.32501 4.375 3.33334 7.36667 3.33334 11.0417C3.33334 14.7167 6.32501 17.7083 10 17.7083C13.675 17.7083 16.6667 14.7167 16.6667 11.0417C16.6667 7.36667 13.675 4.375 10 4.375Z" fill="#E60A2B"/>
            <path d="M10 11.4584C9.65833 11.4584 9.375 11.175 9.375 10.8334V6.66669C9.375 6.32502 9.65833 6.04169 10 6.04169C10.3417 6.04169 10.625 6.32502 10.625 6.66669V10.8334C10.625 11.175 10.3417 11.4584 10 11.4584Z" fill="#E60A2B"/>
            <path d="M12.5 2.29169H7.5C7.15833 2.29169 6.875 2.00835 6.875 1.66669C6.875 1.32502 7.15833 1.04169 7.5 1.04169H12.5C12.8417 1.04169 13.125 1.32502 13.125 1.66669C13.125 2.00835 12.8417 2.29169 12.5 2.29169Z" fill="#E60A2B"/>
        </svg>
    )
}