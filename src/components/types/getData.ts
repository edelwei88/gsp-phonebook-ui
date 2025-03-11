import {Item, User, Payload} from '@/components/types/types'
import { url } from 'inspector';
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'


export async function getEmployees(page? : string, department?: string, organization?: string) : Promise<Payload>{
    const params:Record<string, any> = new URLSearchParams();
    params.append('size', 16);
    if(!!page){
        params.append('page', page);
    }
    else {
        params.append('page', '1');
    }
    if(!!department){
        params.append('department', department);
    }

    if(!!organization){
        params.append('organization', organization);
    }
    
    const baseURL = new URL(`http://89.111.155.239:8000/get_employees`);
    baseURL.search = params.toString();
    
    const response = await fetch(baseURL);
    const json:Payload = await response.json();
    
    return json;
}

export async function getTree() : Promise<Item[]> {
    const response = await fetch(`http://89.111.155.239:8000/get_organization_tree`);
    const json:Item[] = await response.json();

    return json;
}