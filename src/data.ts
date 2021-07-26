
export enum EWhatIKnowItemType {
    'Component frameworks / libraries',
    'Testing frameworks',
    'Backend',
    'Databases',
    'UI and Styling',
    'UI frameworks',
    'Languages / Supersets',
}

export interface IWhatIKnowItem {
    logo: string;
    name: string;
    type?: EWhatIKnowItemType;
    isCurrentlyUsing?: boolean;
}

export interface IWorkplace {
    company: string;
    title: string;
    startingYear: number;
    endingYear: number | null;
    showWorkplaceName?: boolean;
}

export const whatIKnowList: IWhatIKnowItem[] = [
    {
        logo: 'react',
        name: 'React',
        type: EWhatIKnowItemType['Component frameworks / libraries'],
        isCurrentlyUsing: true
    },
    {
        logo: 'angular',
        name: 'Angular',
        type: EWhatIKnowItemType['Component frameworks / libraries'],
        isCurrentlyUsing: false
    },
    {
        logo: 'jest',
        name: 'Jest',
        type: EWhatIKnowItemType['Testing frameworks'],
        isCurrentlyUsing: true
    },
    {
        logo: 'nodejs',
        name: 'nodejs',
        type: EWhatIKnowItemType.Backend,
        isCurrentlyUsing: true
    },
    {
        logo: 'styled-components',
        name: 'Styled Components',
        type: EWhatIKnowItemType['UI and Styling'],
        isCurrentlyUsing: true
    },
    {
        logo: 'js',
        name: 'JavaScript',
        type: EWhatIKnowItemType['Languages / Supersets'],
        isCurrentlyUsing: true
    },
    {
        logo: 'typescript',
        name: 'TypeScript',
        type: EWhatIKnowItemType['Languages / Supersets'],
        isCurrentlyUsing: true
    },
    {
        logo: 'java',
        name: 'Java',
        type: EWhatIKnowItemType['Languages / Supersets'],
        isCurrentlyUsing: false
    },
    {
        logo: 'mysql',
        name: 'MySQL',
        type: EWhatIKnowItemType.Databases,
        isCurrentlyUsing: false
    },
    {
        logo: 'fluentui',
        name: 'Fluent UI',
        type: EWhatIKnowItemType['UI frameworks'],
        isCurrentlyUsing: true
    },
    {
        logo: 'chakraui',
        name: 'Chakra UI',
        type: EWhatIKnowItemType['UI frameworks'],
        isCurrentlyUsing: false
    },
    {
        logo: 'mui',
        name: 'Material UI',
        type: EWhatIKnowItemType['UI frameworks'],
        isCurrentlyUsing: false
    }
];

export const workPlaces: IWorkplace[] = [
    {
        company: "Microsoft",
        title: "Fullstack Software Enginneer",
        startingYear: 2020,
        endingYear: null,
        showWorkplaceName: false
    },
    {
        company: "AT&T",
        title: "Front End Engineer",
        startingYear: 2019,
        endingYear: 2020,
        showWorkplaceName: false
    },
    {
        company: "Plus500",
        title: "Front End Engineer",
        startingYear: 2017,
        endingYear: 2019,
        showWorkplaceName: false
    },
    {
        company: "Intel",
        title: "Student Software Engineer",
        startingYear: 2017,
        endingYear: 2017,
        showWorkplaceName: false
    }
]

