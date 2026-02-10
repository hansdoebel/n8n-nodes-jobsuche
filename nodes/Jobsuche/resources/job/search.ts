import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSearch = {
	operation: ['search'],
};

export const jobSearchDescription: INodeProperties[] = [
	{
		displayName: 'Keyword (Was)',
		name: 'was',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForSearch,
		},
		description: 'Free text search for job title',
		placeholder: 'e.g. Softwareentwickler',
		routing: {
			send: {
				type: 'query',
				property: 'was',
				value: '={{$value || undefined}}',
			},
		},
	},
	{
		displayName: 'Location (Wo)',
		name: 'wo',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForSearch,
		},
		description: 'Free text search for work location',
		placeholder: 'e.g. Berlin',
		routing: {
			send: {
				type: 'query',
				property: 'wo',
				value: '={{$value || undefined}}',
			},
		},
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: showOnlyForSearch,
		},
		description: 'Result page number (starts at 1)',
		routing: {
			send: {
				type: 'query',
				property: 'page',
			},
		},
	},
	{
		displayName: 'Page Size',
		name: 'size',
		type: 'number',
		default: 25,
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		displayOptions: {
			show: showOnlyForSearch,
		},
		description: 'Number of results per page',
		routing: {
			send: {
				type: 'query',
				property: 'size',
			},
		},
	},
	{
		displayName: 'Additional Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: showOnlyForSearch,
		},
		default: {},
		options: [
			{
				displayName: 'Contract Type (Befristung)',
				name: 'befristung',
				type: 'multiOptions',
				options: [
					{ name: 'Befristet (Temporary)', value: '1' },
					{ name: 'Unbefristet (Permanent)', value: '2' },
				],
				default: [],
				description: 'Contract duration type',
				routing: {
					send: {
						type: 'query',
						property: 'befristung',
						value: '={{$value.length ? $value.join(";") : undefined}}',
					},
				},
			},
			{
				displayName: 'Disability Suitable (Behinderung)',
				name: 'behinderung',
				type: 'boolean',
				default: false,
				description: 'Whether to only show positions suitable for people with disabilities',
				routing: {
					send: {
						type: 'query',
						property: 'behinderung',
						value: '={{$value || undefined}}',
					},
				},
			},
			{
				displayName: 'Employer (Arbeitgeber)',
				name: 'arbeitgeber',
				type: 'string',
				default: '',
				description: 'Employer name filter',
				placeholder: 'e.g. Deutsche Bahn AG',
				routing: {
					send: {
						type: 'query',
						property: 'arbeitgeber',
						value: '={{$value || undefined}}',
					},
				},
			},
			{
				displayName: 'Include Temp Agency Jobs (Zeitarbeit)',
				name: 'zeitarbeit',
				type: 'boolean',
				default: true,
				description:
					'Whether to include jobs from temporary employment agencies in results',
				routing: {
					send: {
						type: 'query',
						property: 'zeitarbeit',
					},
				},
			},
			{
				displayName: 'Occupational Field (Berufsfeld)',
				name: 'berufsfeld',
				type: 'string',
				default: '',
				description: 'Free text search for occupational field',
				placeholder: 'e.g. Informatik',
				routing: {
					send: {
						type: 'query',
						property: 'berufsfeld',
						value: '={{$value || undefined}}',
					},
				},
			},
			{
				displayName: 'Offer Type (Angebotsart)',
				name: 'angebotsart',
				type: 'options',
				options: [
					{ name: 'Arbeit', value: 1 },
					{ name: 'Ausbildung/Duales Studium', value: 4 },
					{ name: 'Praktikum/Trainee', value: 34 },
					{ name: 'Selbstaendigkeit', value: 2 },
				],
				default: 1,
				description: 'Type of job offer',
				routing: {
					send: {
						type: 'query',
						property: 'angebotsart',
					},
				},
			},
			{
				displayName: 'Published Since (Days)',
				name: 'veroeffentlichtseit',
				type: 'number',
				default: 30,
				typeOptions: {
					minValue: 0,
					maxValue: 100,
				},
				description: 'Number of days since the job was published (0-100)',
				routing: {
					send: {
						type: 'query',
						property: 'veroeffentlichtseit',
					},
				},
			},
			{
				displayName: 'Radius (Km)',
				name: 'umkreis',
				type: 'number',
				default: 25,
				description: 'Search radius in kilometers from the location',
				placeholder: 'e.g. 25',
				routing: {
					send: {
						type: 'query',
						property: 'umkreis',
					},
				},
			},
			{
				displayName: 'Working Time (Arbeitszeit)',
				name: 'arbeitszeit',
				type: 'multiOptions',
				options: [
					{ name: 'Heim-/Telearbeit (Remote)', value: 'ho' },
					{ name: 'Minijob', value: 'mj' },
					{ name: 'Schicht/Nacht/Wochenende (Shift/Night/Weekend)', value: 'snw' },
					{ name: 'Teilzeit (Part-Time)', value: 'tz' },
					{ name: 'Vollzeit (Full-Time)', value: 'vz' },
				],
				default: [],
				description: 'Working time model',
				routing: {
					send: {
						type: 'query',
						property: 'arbeitszeit',
						value: '={{$value.length ? $value.join(";") : undefined}}',
					},
				},
			},
		],
	},
];
