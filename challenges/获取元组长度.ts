type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type Length<T> = T extends any[] ? T['length'] : never;

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
