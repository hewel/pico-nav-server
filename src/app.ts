export class Name {
    private firstName: string
    public lastName: string
    public readonly middleName: string

    public constructor(props: { firstName?: string; lastName?: string }) {
        const { firstName, lastName } = props
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = 'john'
    }

    public logAllName(): void {
        const { firstName, lastName, middleName } = this
        this.logName('%s-%s-%s', firstName, lastName, middleName)
    }
    private logName(name: string, ...props: string[]): void {
        console.log(name, ...props)
    }
}
