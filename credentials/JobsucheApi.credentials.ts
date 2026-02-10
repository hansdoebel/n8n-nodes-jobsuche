import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class JobsucheApi implements ICredentialType {
	name = 'jobsucheApi';

	displayName = 'Jobsuche API';

	icon: Icon = 'file:../icons/jobsuche.svg';

	documentationUrl = 'https://jobsuche.api.bund.dev/';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: 'jobboerse-jobsuche',
			description:
				'The X-API-Key for the Arbeitsagentur Jobsuche API. Default: jobboerse-jobsuche.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-Key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://rest.arbeitsagentur.de/jobboerse/jobsuche-service',
			url: '/pc/v4/jobs',
			qs: {
				size: '1',
			},
			method: 'GET',
		},
	};
}
