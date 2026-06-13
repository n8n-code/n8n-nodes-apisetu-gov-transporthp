import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTransporthpApi implements ICredentialType {
        name = 'N8nDevApisetuGovTransporthpApi';

        displayName = 'Apisetu Gov Transporthp API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTransporthp/apisetu-gov-transporthp.svg', dark: 'file:../nodes/ApisetuGovTransporthp/apisetu-gov-transporthp.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/transporthp/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/transporthp/v3',
                        description: 'The base URL of your Apisetu Gov Transporthp API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
