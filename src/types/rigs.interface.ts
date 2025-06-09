interface RigData {
    id: string
    rig_name: string
    temp_rig: number
    rig_status: 'online' | 'maintenance' | 'offline' | 'warning'
    rig_location: string
    rig_type: string
    rig_model: string
    rig_ip_address: string
    rig_port: number
    end_ring_service: string
  }

  export type { RigData };