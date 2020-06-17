import PropTypes from 'prop-types';

import styled from 'styled-components';
import oc from 'open-color';
import { media } from 'helpers/style-utils';

import EditIcon from 'react-icons/lib/md/edit';
import DeleteIcon from 'react-icons/lib/md/delete';
import CloseIcon from 'react-icons/lib/md/close';

import SecurityIcon from 'react-icons/lib/md/security';
import PdnIcon from 'react-icons/lib/md/cast';
import KeyboardControlIcon from 'react-icons/lib/md/keyboard-control';

import { Modal, Tooltip, Dimmed } from 'components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  postion: relative;
  width: 900px;

  ${media.mobile`
    width: calc(100vw - 4rem);
  `}

  background: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const Header = styled.div`
  position: relative;
  display: flex;

  background: ${oc.gray[1]};

  .title {
    padding: 1.5rem;
    color: ${oc.gray[8]};
    font-size: 1.5rem;
  }

  .actions {
    position: absolute;
    top: 0;
    right: 0;
    width: 8rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CircleButton = styled.div`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px;

  color: ${oc.gray[6]};

  border-radius: 1rem;
  font-size: 1.5rem;

  &:hover {
    color: ${oc.indigo[6]};
  }

  &.delete {
    &:hover {
      color: ${oc.pink[6]};
    }
  }
`

const Body = styled.div`
  display: block;
  margin: 0.5rem;

  height: 500px;
  ${media.mobile`
    height: calc(100vh - 16rem);
  `}

  overflow: scroll;
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0, auto;
  color: ${oc.gray[9]};

  .header {
    margin: 12px;
    font-size: 16px;
  }
  .body {
    display: flex;
    flex-direction: row;
    flex:1;
    margin: 6px;

    .left {
      width: 80px;
      text-align: center;
      font-size: 18px;
      color: ${oc.gray[6]};
    }

    .right {
      display: flex;
      flex-direction: column;
      flex:1;

      .data {
        flex:1;
        font-size: 12px;
        margin: 4px;
      }
    }
  }
`

const Pdn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: ${oc.gray[9]};

  .header {
    margin: 12px;
    font-size: 16px;
  }
  .body {
    display: flex;
    flex-direction: row;
    flex:1;
    margin: 0px 32px;

    .small_data {
      width: 50px;
      font-size: 12px;
      margin: 4px;
    }
    .medium_data {
      width: 80px;
      font-size: 12px;
      margin: 4px;
    }
    .large_data {
      width: 140px;
      font-size: 12px;
      margin: 4px;
    }
  }
`
const View = ({ visible, disableOnClickOutside, profile, onEdit, onDelete, onHide }) => {
  const _id = (profile || {})._id;
  const title = (profile || {}).title;
  const security = ((profile || {}).security || {});
  const ambr = ((profile || {}).ambr || {});
  const pdns = ((profile || {}).pdn || []);

  return (
    <div>
      <Modal 
        visible={visible} 
        onOutside={onHide}
        disableOnClickOutside={disableOnClickOutside}>
        <Wrapper>
          <Header>
            <div className="title">{title}</div>
            <div className="actions">
              <Tooltip content='Edit' width="60px">
                <CircleButton onClick={() => onEdit(_id)}><EditIcon/></CircleButton>
              </Tooltip>
              <Tooltip content='Delete' width="60px">
                <CircleButton className="delete" onClick={() => onDelete(_id)}><DeleteIcon/></CircleButton>
              </Tooltip>
              <Tooltip content='Close' width="60px">
                <CircleButton className="delete" onClick={onHide}><CloseIcon/></CircleButton>
              </Tooltip>
            </div>
          </Header>
          <Body>
            <Profile>
              <div className="header">
                Profile Configuration
              </div>
              <div className="body">
                <div className="left">
                  <SecurityIcon/>
                </div>
                <div className="right">
                  <div className="data">
                    {security.k}
                    <span style={{color:oc.gray[5]}}><KeyboardControlIcon/>K</span>
                  </div>
                  {security.opc &&
                    <div className="data">
                      {security.opc}
                      <span style={{color:oc.gray[5]}}><KeyboardControlIcon/>OPc</span>
                    </div>
                  }
                  {security.op &&
                    <div className="data">
                      {security.op}
                      <span style={{color:oc.gray[5]}}><KeyboardControlIcon/>OP</span>
                    </div>
                  }
                  <div className="data">
                    {security.amf}
                    <span style={{color:oc.gray[5]}}><KeyboardControlIcon/>AMF</span>
                  </div>
                  {security.rand &&
                    <div className="data">
                      {security.rand}
                      <span style={{color:oc.gray[5]}}><KeyboardControlIcon/>RAND</span>
                    </div>
                  }
                  {security.sqn &&
                    <div className="data">
                      {security.sqn}
                      <span style={{color:oc.gray[5]}}><KeyboardControlIcon/>SQN</span>
                    </div>
                  }
                </div>
              </div>
              <div className="body">
                <div className="left">
                  <PdnIcon/>
                </div>
                <div className="right">
                  <div className="data">
                    {ambr.downlink} Kbps
                    <span style={{color:oc.gray[5]}}><KeyboardControlIcon/>UL</span>
                  </div>
                  <div className="data">
                    {ambr.uplink} Kbps
                    <span style={{color:oc.gray[5]}}><KeyboardControlIcon/>DL</span>
                  </div>
                </div>
              </div>
            </Profile>
            <Pdn>
              <div className="header">
                APN Configrations
              </div>
              <div className="body" style={{color:oc.gray[5]}}>
                <div className="medium_data">APN</div>
                <div className="small_data">QCI</div>
                <div className="small_data">ARP</div>
                <div className="medium_data">Capability</div>
                <div className="medium_data">Vulnerablility</div>
                <div className="large_data">MBR DL/UL(Kbps)</div>
                <div className="large_data">GBR DL/UL(Kbps)</div>
                <div className="medium_data">PGW IP</div>
              </div>
              {pdns.map(pdn =>
                <div key={pdn.apn}>
                  <div className="body">
                    <div className="medium_data">{pdn.apn}</div>
                    <div className="small_data">{pdn.qos.qci}</div>
                    <div className="small_data">{pdn.qos.arp.priority_level}</div>
                    <div className="medium_data">{pdn.qos.arp.pre_emption_capability === 1 ? "Disabled" : "Enabled"}</div>
                    <div className="medium_data">{pdn.qos.arp.pre_emption_vulnerability === 1 ? "Disabled" : "Enabled"}</div>
                    {pdn['ambr'] === undefined ? 
                      <div className="large_data">
                        unlimited/unlimited
                        </div> :
                      <div className="large_data">
                        {pdn.ambr['downlink'] === undefined ? "unlimited" : pdn.ambr.downlink}
                        /
                        {pdn.ambr['uplink'] === undefined ? "unlimited" : pdn.ambr.uplink}
                      </div>
                    }
                    <div className="large_data"></div>
                    <div className="small_data">{(pdn.pgw || {}).addr}</div>
                    <div className="small_data">{(pdn.pgw || {}).addr6}</div>
                  </div>
                  {pdn['pcc_rule'] !== undefined &&
                    pdn.pcc_rule.map((pcc_rule, index) =>
                      <div key={index}>
                        <div className="body">
                          <div className="medium_data"></div>
                          <div className="small_data">{pcc_rule.qos.qci}</div>
                          <div className="small_data">{pcc_rule.qos.arp.priority_level}</div>
                          <div className="medium_data">{pcc_rule.qos.arp.pre_emption_capability === 1 ? "Disabled" : "Enabled"}</div>
                          <div className="medium_data">{pcc_rule.qos.arp.pre_emption_vulnerability === 1 ? "Disabled" : "Enabled"}</div>
                          {pcc_rule.qos['mbr'] === undefined ? 
                            <div className="large_data">
                              unlimited/unlimited
                              </div> :
                            <div className="large_data">
                              {pcc_rule.qos.mbr['downlink'] === undefined ? "unlimited" : pcc_rule.qos.mbr.downlink}
                              /
                              {pcc_rule.qos.mbr['uplink'] === undefined ? "unlimited" : pcc_rule.qos.mbr.uplink}
                            </div>
                          }
                          {pcc_rule.qos['gbr'] === undefined ? 
                            <div className="large_data">
                              unlimited/unlimited
                              </div> :
                            <div className="large_data">
                              {pcc_rule.qos.gbr['downlink'] === undefined ? "unlimited" : pcc_rule.qos.gbr.downlink}
                              /
                              {pcc_rule.qos.gbr['uplink'] === undefined ? "unlimited" : pcc_rule.qos.gbr.uplink}
                            </div>
                          }
                        </div>
                        {pcc_rule['flow'] !== undefined &&
                          pcc_rule.flow.map((flow, index) =>
                            <div className="body" key={index}>
                              <div className="medium_data"></div>
                              <div className="small_data" style={{color:oc.gray[5]}}>
                                {flow.direction == 1 && "Downlink"}
                                {flow.direction == 2 && "Uplink"}
                              </div>
                              <div className="large_data" style={{width:"480px"}}>{flow.description}</div>
                            </div>
                          )
                        }
                      </div>
                    )
                  }
                </div>
              )}
            </Pdn>
          </Body>
        </Wrapper>
      </Modal>
      <Dimmed visible={visible}/>
    </div>
  )
}

export default View;
