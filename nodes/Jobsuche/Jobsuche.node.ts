import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { jobDescription } from './resources/job';

export class Jobsuche implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Jobsuche',
		name: 'jobsuche',
		icon: 'file:../../icons/jobsuche.svg',
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Search the Arbeitsagentur job database - the largest job database in Germany',
		defaults: {
			name: 'Jobsuche',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'jobsucheApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://rest.arbeitsagentur.de/jobboerse/jobsuche-service',
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'hidden',
				noDataExpression: true,
				default: 'job',
			},
			...jobDescription,
		],
	};
}
