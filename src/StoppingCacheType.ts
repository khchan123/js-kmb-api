export type StoppingCacheType = {
    stop: { id: string },
    variant: {
        route: { number: string, bound: number },
        serviceType: number,
        origin: string,
        destination: string,
        description: string,
    },
    direction : string,
    sequence: number,
    fare : number,
}[];