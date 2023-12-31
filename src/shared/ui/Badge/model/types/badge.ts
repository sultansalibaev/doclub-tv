
type ModeType = 'new' | 'special' | 'speciality' | 'premium' | 'more' | 'online' | 'expert';
type IconType = 'left' | 'right' | undefined

interface BadgesType {
    name: string
    mode: ModeType
    icon?: IconType
}

export {
    BadgesType,
    ModeType,
    IconType,
}