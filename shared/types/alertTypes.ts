export interface AlertItemProps {
  time: Date | null
  type: string // this will be updated to be props to color code based on word.
  location: string
}
