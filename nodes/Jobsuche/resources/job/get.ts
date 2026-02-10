import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGet = {
	operation: ['get'],
};

export const jobGetDescription: INodeProperties[] = [
	{
		displayName: 'Reference Number (Refnr)',
		name: 'refnr',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForGet,
		},
		description: 'The reference number of the job listing (refnr from search results)',
		placeholder: 'e.g. 10000-1184867112-S',
	},
];
