
export interface Achievement {
    fcs: string,
    name: string,
    status: string,
    organizator: string,
    stepen: string,
    ball: number,
    date: Date,
    file: Blob,
    isChecked?: boolean,
    id?: number
}
