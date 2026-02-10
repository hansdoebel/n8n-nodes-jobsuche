import type { INodeProperties } from 'n8n-workflow';
import { jobSearchDescription } from './search';
import { jobGetDescription } from './get';

export const jobDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get a job listing',
				description: 'Get details of a specific job listing by its reference number',
				routing: {
					request: {
						method: 'GET',
						url: '/pc/v3/jobdetails/placeholder',
					},
					send: {
						preSend: [
							async function (this, requestOptions) {
								const refnr = this.getNodeParameter('refnr') as string;
								const encoded = Buffer.from(refnr).toString('base64');
								requestOptions.url = `/pc/v3/jobdetails/${encoded}`;
								return requestOptions;
							},
						],
					},
				},
			},
			{
				name: 'Search',
				value: 'search',
				action: 'Search job listings',
				description: 'Search available job offers with various filters',
				routing: {
					request: {
						method: 'GET',
						url: '/pc/v4/jobs',
					},
				},
			},
		],
		default: 'search',
	},
	...jobSearchDescription,
	...jobGetDescription,
];
